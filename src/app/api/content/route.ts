import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateContentSchema } from '@/lib/validations/content'
import { successResponse, errorResponse, handleValidationError, handlePrismaError } from '@/lib/api-response'
import { getAuthUser } from '@/lib/auth'

// GET /api/content - Get all content
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status')
    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset')

    const where: any = {}
    
    if (type) {
      where.type = type
    }
    
    if (status) {
      where.status = status
    }

    const contents = await prisma.content.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit ? parseInt(limit) : undefined,
      skip: offset ? parseInt(offset) : undefined,
    })

    return successResponse(contents)
  } catch (error) {
    console.error('GET /api/content error:', error)
    return errorResponse('Failed to fetch content', 500)
  }
}

// POST /api/content - Create new content
export async function POST(request: NextRequest) {
  try {
    // Check authentication (optional for now, but structure is ready)
    // const user = getAuthUser(request)
    // if (!user) {
    //   return errorResponse('Unauthorized', 401)
    // }

    const body = await request.json()
    const validatedData = CreateContentSchema.parse(body)

    const content = await prisma.content.create({
      data: validatedData,
    })

    return successResponse(content, 'Content created successfully')
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return handleValidationError(error as any)
    }

    if (error && typeof error === 'object' && 'code' in error) {
      return handlePrismaError(error)
    }

    console.error('POST /api/content error:', error)
    return errorResponse('Failed to create content', 500)
  }
}