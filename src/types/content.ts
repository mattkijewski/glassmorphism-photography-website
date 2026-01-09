export interface Content {
  id: string
  title: string
  description?: string | null
  content: string
  type: ContentType
  status: ContentStatus
  imageUrl?: string | null
  slug: string
  tags?: string | null
  createdAt: Date
  updatedAt: Date
}

export enum ContentType {
  PORTFOLIO = 'PORTFOLIO',
  BLOG_POST = 'BLOG_POST',
  SERVICE = 'SERVICE',
  TESTIMONIAL = 'TESTIMONIAL',
  ABOUT = 'ABOUT',
}

export enum ContentStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}