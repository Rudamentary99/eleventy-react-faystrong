import React from 'react';

export default function Head({ title, slogan, description, ...props }) {
    return (
        <head>
            {title && (
                <title>
                    {title}
                    {slogan && <> | {slogan}</>}
                </title>
            )}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/img/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/img/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/img/favicons/site.webmanifest" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>

            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta name="theme-color" content="#ffffff" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
            <meta name="generator" content="eleventy-react" />
            {description && <meta name="description" content={description} />}
        </head>
    );
}
