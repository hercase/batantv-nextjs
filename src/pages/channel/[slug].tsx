import { useRouter } from 'next/router';

const Channel: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <h1>Este canal es {slug}</h1>;
};

export default Channel;
