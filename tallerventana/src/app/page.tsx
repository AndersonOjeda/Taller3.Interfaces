import React from 'react';

export default function AppearanceSettings() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <section className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4">
        <header>
          <h1 className="text-xl font-semibold">Appearance</h1>
          <p className="text-gray-400 text-sm">Set or customize your preferences for the system</p>
        </header>
        
        <section className="flex justify-between items-center border-t pt-4">
          <div>
            <h2 className="text-base font-medium">Language</h2>
            <p className="text-gray-400 text-sm">Select the language of the platform</p>
          </div>
          <select className="border rounded-lg px-4 py-2 text-gray-700 w-40">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </section>

        <section className="border-t pt-4">
          <h2 className="text-base font-medium">Interface theme</h2>
          <p className="text-gray-400 text-sm">Customize your application appearance</p>
          <div className="flex gap-4 mt-3">
            {['Auto', 'Light', 'Dark'].map((theme, index) => (
              <button key={theme} className={`flex-1 flex flex-col items-center p-2 border ${index === 1 ? 'border-indigo-500' : ''} rounded-lg`}>
                <div className={`w-full h-16 rounded-md ${index === 2 ? 'bg-indigo-800' : index === 1 ? 'bg-white border' : 'bg-purple-100'}`}></div>
                <p className="text-sm mt-2">{theme}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="border-t pt-4">
        <div className="flex items-center justify-between">
       <div>
        <h2 className="text-base font-medium">Accent color</h2>
         <p className="text-gray-400 text-sm">Pick your platform's main color</p>
     </div>
      <div className="flex gap-2">
      {['red', 'yellow', 'green', 'blue', 'purple'].map(color => (
        <button key={color} className={`w-8 h-8 rounded-full bg-${color}-400`}></button>
      ))}
    </div>
  </div>
</section>

        <section className="border-t pt-4 space-y-3">
          {[{ label: 'Reduce motion' }, { label: 'Auto play' }, { label: 'High quality photo' }].map(setting => (
            <div key={setting.label} className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <span className={`h-5 w-5 text-gray-400 material-icons`}></span>
                {setting.label}
              </span>
              <button className="w-14 h-7 rounded-full bg-gray-300 relative">
                <span className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full"></span>
              </button>
            </div>
          ))}
        </section>

        <footer className="border-t pt-4 flex justify-between items-center">
          <button className="text-gray-500 text-sm">Reset to default</button>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 border rounded-lg">Cancel</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save Preferences</button>
          </div>
        </footer>
      </section>
    </main>
  );
}
