import Grid from '../components/grid';
import Loading from '../components/loading';
import { useEffect, useState } from 'react';

function Mainscreen() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {setLoading(false);}, 1000);
    }, []);
  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div>
        <Grid />
    </div>
  );
}

export default Mainscreen;