import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://delightedgames.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://delightedgames.com/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.75
        },
        {
            url: 'https://delightedgames.com/games',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.75
        }
        
    ]
}