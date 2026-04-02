import { Request, Response } from "express";
import { auth } from "../../../lib/auth.js";
import { toNodeHandler } from "better-auth/node";

/**
 * Este es el controlador que Better Auth utiliza para manejar todas sus rutas internas:
 * - /api/auth/sign-up
 * - /api/auth/sign-in
 * - /api/auth/sign-out
 * - /api/auth/session
 * - /api/auth/social/google
 */
export const authHandler = toNodeHandler(auth);
