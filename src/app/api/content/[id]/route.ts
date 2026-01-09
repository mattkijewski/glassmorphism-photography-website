import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UpdateContentSchema, ContentIdSchema } from '@/lib/validations/content'
import { successResponse, errorResponse, handleValidationError, handlePrismaError } from '@/lib/api-response'
import { getAuthUser } from '@/lib/auth'

interface RouteParams {
  params: {
    id: string
  }
}

// GET /api/content/[id] - Get content by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = ContentIdSchema.parse(params)

    const content = await prisma.content.findUnique({
      where: { id },
    })

    if (!content) {
      return errorResponse('Content not found', 404)
    }

    return successResponse(content)
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return handleValidationError(error as any)
    }

    console.error('GET /api/content/[id] error:', error)
    return errorResponse('Failed to fetch content', 500)
  }
}

// PUT /api/content/[id] - Update content
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    // Check authentication (optional for now, but structure is ready)
    // const user = getAuthUser(request)
    // if (!user) {
    //   return errorResponse('Unauthorized', 401)
    // }

    const { id } = ContentIdSchema.parse(params)
    const body = await request.json()
    const validatedData = UpdateContentSchema.parse({ ...body, id })

    // Remove id from update data
    const { id: _, ...updateData } = validatedData

    const content = await prisma.content.update({
      where: { id },
      data: updateData,
    })

    return successResponse(content, 'Content updated successfully')
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return handleValidationError(error as any)
    }

    if (error && typeof error === 'object' && 'code' in error) {
      return handlePrismaError(error)
    }

    console.error('PUT /api/content/[id] error:', error)
    return errorResponse('Failed to update content', 500)
  }
}

// DELETE /api/content/[id] - Delete content
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    // Check authentication (optional for now, but structure is ready)
    // const user = getAuthUser(request)
    // if (!user) {
    //   return errorResponse('Unauthorized', 401)
    // }

    const { id } = ContentIdSchema.parse(params)

    await prisma.content.delete({
      where: { id },
    })

    return successResponse(null, 'Content deleted successfully')
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return handleValidationError(error as any)
    }

    if (error && typeof error === 'object' && 'code' in error) {
      return handlePrismaError(error)
    }

    console.error('DELETE /api/content/[id] error:', error)
    return errorResponse('Failed to delete content', 500)
  }
}