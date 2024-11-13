import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="mt-12">
        <img
          src="/public/Images/Musical Notes Illustration.png"
          alt="Musical Notes Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#fcd462]">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-200">Page Not Found</h2>
        <p className="mt-2 text-gray-400">
          Oops! The page you're looking for doesn't exist. It might have been removed, or the link could be incorrect.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/"
            className="px-5 py-3 font-medium rounded-lg bg-[#fcd462] text-gray-900 hover:bg-[#e2b650] transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-5 py-3 font-medium rounded-lg border border-[#fcd462] text-[#fcd462] hover:bg-[#fcd462] hover:text-gray-900 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default NotFoundPage;
