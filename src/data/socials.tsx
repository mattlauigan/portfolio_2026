import { Github, Instagram, Linkedin } from "lucide-react";

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mattlauigan', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raymartlauigan', icon: Linkedin },
  {
    label: 'Behance',
    href: 'https://www.behance.net/mattlauigan',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.956c-.329-2.859-3.851-2.754-3.956 0zM8.867 12c1.39 0 2.116-.58 2.116-1.73 0-1.15-.726-1.727-2.116-1.727H5v3.456h3.867zM5 16.273h4.101c1.522 0 2.345-.703 2.345-2.01 0-1.307-.823-2.01-2.345-2.01H5v4.02zM0 5v14h9.81c2.83 0 4.951-1.462 4.951-4.353 0-1.845-.889-3.015-2.34-3.54 1.13-.594 1.86-1.658 1.86-3.11C14.281 5.954 12.17 5 9.81 5H0z" />
      </svg>
    ),
  },
  { label: 'Instagram', href: 'https://www.instagram.com/mattttrl', icon: Instagram },
];