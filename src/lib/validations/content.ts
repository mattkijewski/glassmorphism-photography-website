import { z } from 'zod'

export const ContentType = z.enum(['PORTFOLIO', 'BLOG_POST', 'SERVICE', 'TESTIMONIAL', 'ABOUT'])
export const ContentStatus = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])

export const CreateContentSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  description: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  type: ContentType,
  status: ContentStatus.optional().default('DRAFT'),
  imageUrl: z.string().url().optional().or(z.literal('')),
  slug: z.string()
    .min(1, 'Slug is required')
    .max(255, 'Slug too long')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  tags: z.string().optional(),
})

export const UpdateContentSchema = CreateContentSchema.partial().extend({
  id: z.string().min(1, 'ID is required'),
})

export const ContentIdSchema = z.object({
  id: z.string().min(1, 'ID is required'),
})

export type CreateContentInput = z.infer<typeof CreateContentSchema>
export type UpdateContentInput = z.infer<typeof UpdateContentSchema>
export type ContentIdInput = z.infer<typeof ContentIdSchema>