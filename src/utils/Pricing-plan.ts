/**
 * Lista de planes de precios disponibles en la aplicación.
 * 
 * Cada plan contiene:
 * - `title`: Nombre del plan.
 * - `price`: Precio del plan (formato string, por ejemplo "$9.990").
 * - `features`: Lista de características incluidas en el plan.
 * - `bestValue` (opcional): Marca si el plan es destacado como la mejor opción.
 */
export const pricingPlans = [
    {
        title: "Email Marketing",
        features: [
            "Diseño, segmentación y envio hasta 4 newsletters/mes.",
            "Reportes de aperturas y clics.",

        ],
    },
    {
                title: "E-commerce y Marketplace Managment",
        features: [
            "Gestión de catálogo.",
            "Optimización de fichas de producto.",
            "Control de ventas."
        ],

        bestValue: true,
    },
    {
        title: "SEO",
        features: [
            "Optimización manual del sitio web.",
            "Análisis de palabras clave y mejoras de posicionamiento.",
        ],
    },
        {
        title: "Publicidad digital",
        features: [
            "Planificación, ejecución y optimización de campañas pagadas en Google, Meta, TikTok Ads,etc.",
        ],
    },
];
