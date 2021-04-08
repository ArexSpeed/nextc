import Link from 'next/link'

const navLinks = [
  {path: '/', label: 'Blog', id: 1},
  {path: '/about', label: 'About', id: 2},
  {path: '/projects', label: 'Projects', id: 3},
]

export default function Layout({children}) {
  return (
    <div className="p-10 font-mono">
      <nav className="bg-blue-400 p-5 flex justify-center">
        {navLinks.map(link => (
          <Link href={link.path} key={link.id}>
          <a href="" className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">
            {link.label}
          </a>
          </Link>
        ))}
        
      </nav>

      <main className="bg-gray-100 p-5">
        {children}
      </main>

      <footer className="bg-blue-400 p-5 text-gray-100 text-center">{new Date().getFullYear()}</footer>
    </div>
  )
}
