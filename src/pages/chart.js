import React from 'react';
import Link from 'next/link';
import ChartComponent from '../components/Chart';


function Chart() {
  return (
    <div>
      <h1>
        <Link href="/"><a>Back to home</a></Link>

      </h1>
      <ChartComponent />
    </div>
  );
}

export default Chart;
