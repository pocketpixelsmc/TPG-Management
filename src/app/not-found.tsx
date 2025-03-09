import Link from 'next/link';
import Header from './components/ui/Header';
import Button from './components/ui/Button';
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Header>Page Not Found</Header>
      <p className="text-xl text-blue-950 mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link 
        href="/"
      >
        <Button>Return to Home</Button>
      </Link>
    </main>
  );
} 