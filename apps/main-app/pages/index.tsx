import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export function Index() {
  return <div className="text-red-500">test</div>;
}

export default Index;
