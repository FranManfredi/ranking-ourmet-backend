import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../prisma.js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    
    // El plugin emailPassword es necesario para habilitar sign-up y sign-in con correo
    emailAndPassword: {
        enabled: true,
    },

    user: {
        additionalFields: {
            surname: {
                type: "string",
                required: false,
                input: true
            }
        }
    },

    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    await prisma.reviewer.create({
                        data: {
                            userId: user.id,
                            name: user.name,
                            surname: (user as any).surname || "", 
                        }
                    });
                }
            }
        }
    },

    secret: process.env.BETTER_AUTH_SECRET,

    baseURL: process.env.BETTER_AUTH_BASE_URL || "http://localhost:3000",
    
    // Configuración para entornos con proxy (Docker, Nginx, Vercel, etc.)
    trustHost: true,
    trustedProxies: ["loopback"],
    rateLimit: {
        enabled: false
    }
});
