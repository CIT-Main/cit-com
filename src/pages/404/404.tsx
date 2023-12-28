const NotFoundPage = () => {
  return (
    <main>
      <div className=" bg-gray-200 w-full mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </h3>
          <p className="text-gray-800 mt-3">
            Sorry page your looking is not part of this website
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/"
              className="px-4 py-3 bg-gray-900 text-gray-100 text-sm font-semibold rounded hover:bg-gray-800"
            >
              Go back home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
