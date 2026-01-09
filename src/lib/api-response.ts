import { NextResponse } from 'next/server'
import { z } from 'zod'

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export function successResponse<T>(data: T, message?: string): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message,
  })
}

export function errorResponse(error: string, status = 400): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error,
  }, { status })
}

export function handleValidationError(error: z.ZodError): NextResponse<ApiResponse> {
  const errorMessage = error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ')
  return errorResponse(`Validation error: ${errorMessage}`, 400)
}

export function handlePrismaError(error: any): NextResponse<ApiResponse> {
  if (error.code === 'P2002') {
    return errorResponse('A record with this unique field already exists', 409)
  }
  
  if (error.code === 'P2025') {
    return errorResponse('Record not found', 404)
  }

  console.error('Prisma error:', error)
  return errorResponse('Database error occurred', 500)
}