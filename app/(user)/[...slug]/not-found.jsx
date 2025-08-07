import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[75dvh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#3E3E3E] mb-4">City Not Found</h1>
                <p className="text-xl text-gray-600 mb-8">
                    We don't currently offer courses in this location.
                </p>
                <Link
                    href="/"
                    className="bg-btn text-white px-6 py-3 rounded-lg hover:bg-btn/70 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}