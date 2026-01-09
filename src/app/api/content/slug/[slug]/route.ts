import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { successResponse, errorResponse } from '@/lib/api-response'

interface RouteParams {
  params: {
    slug: string
  }
}

// GET /api/content/slug/[slug] - Get content by slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = params

    if (!slug) {
      return errorResponse('Slug is required', 400)
    }

    const content = await prisma.content.findUnique({
      where: { slug },
    })

    if (!content) {
      return errorResponse('Content not found', 404)
    }

    return successResponse(content)
  } catch (error) {
    console.error('GET /api/content/slug/[slug] error:', error)
    return errorResponse('Failed to fetch content', 500)
  }
}