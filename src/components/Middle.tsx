import React from 'react'
const features = [
    { name: 'Software Development', description: 'Designed by Good Goods, Inc.' },
    { name: 'UX/UI', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Software Architecture', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Cloud Computing', description: 'Hand sanded and finished with natural oil' },
  ]
export default function Middle() {
  return (
    <div className="bg-white">
        {/* gap-x-8 gap-y-16 px-4 py-24 */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center ">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My passion</h2>
          <p className="mt-4 text-gray-500">
          I am passionate about web development and software engineering. Looking to contribute my software skills to a challenging role. With excitement, I am eager to learn more about both Frontend and Backend technologies. I am ready to take a deep dive into 
          challenges in software development.
          </p>

          <dl className="mt-16 mb-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>
  )
}
