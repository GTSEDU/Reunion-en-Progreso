interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
}
  
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-gray-700 p-6 rounded-lg">
            <div className="text-slate-500">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}