import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#255849'}} className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Image
            src="/cerat-logo.jpg"
            alt="Cerat Logo"
            width={60}
            height={60}
            className="mx-auto mb-4 rounded-lg"
          />
          <h3 className="text-2xl font-bold mb-4 text-white">CERAT PTY LTD</h3>
          <p className="text-gray-400 mb-4">
            Professional Mechanical, Electrical and Building Services since 2017
          </p>
          <div className="text-gray-400 mb-4">
            <p>2 Roos Street, Fourways Golfpark, Sandton</p>
            <p>+27 79 028 6454</p>
            <p>info@cerat.co.za</p>
          </div>
          <p className="mt-8 text-gray-500">
            &copy; {new Date().getFullYear()} Cerat Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
