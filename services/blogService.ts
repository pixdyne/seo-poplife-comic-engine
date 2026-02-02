import { sanityClient } from './sanity';
import { BlogPost } from '../types';

const SITE_ID = 'poplife-comic-engine';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blog" && site == $site] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      mainImage,
      contentImage,
      color
    }
  `, { site: SITE_ID });
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await sanityClient.fetch(`
    *[_type == "blog" && site == $site && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      mainImage,
      contentImage,
      content,
      color
    }
  `, { site: SITE_ID, slug });

  return posts || null;
}
