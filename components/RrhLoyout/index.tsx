import RrhHeader from '../RrhHeader';
import RrhFooter from '../RrhFooter';
export default function RrhLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <RrhHeader />
      {children}
      <RrhFooter />
    </div>
  );
}
