import React, {forwardRef} from 'react';
import '../styles/ThirdPage.css';
import '../styles/SecondPage.css';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const ThirdPage = forwardRef((props, ref) => {
  return (
    <div className='thirdPageCont' ref={ref}>
      <div className='descriptionCont'>
        <div className='descLeft thirdPageDescLeft'>
          <PieChart
            series={[
              {
                arcLabel: (item, params) => {
                  const { highlighted } = params || {}; // Ensure params is defined
                  return highlighted ? `${item.label}: ${item.value}%` : ''; // Show label and percentage only when highlighted
                },
                data: [
                  { id: 0, value: 80, color: 'purple', label: 'LP' },
                  { id: 1, value: 10, color: 'violet', label: 'TREASURY' },
                  { id: 2, value: 5, color: 'orange', label: 'CEX WALLET' },
                ],
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'black',
                fontWeight: 'bold',
                fontSize: '2rem',
              },
            }}
            slotProps={{
              legend: { hidden: true },
            }}
            width={450}
            height={450}
          />
        </div>
        <div className='descRight thirdPageDescRight'>
          <h2>TOKENOMICS</h2>
          <h3>85% LP</h3>
          <h3>10% TREASURY</h3>
          <h3>5% CEX WALLET</h3>
        </div>
      </div>
      
    </div>
  );
})

export default ThirdPage;
