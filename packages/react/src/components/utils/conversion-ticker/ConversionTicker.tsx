import React from 'react';

import { TickerCard } from '../../library/ticker-card/TickerCard';
import { TickerProps } from '../../../types/analytics';

export const ConversionTicker = ({ value }: TickerProps) =>
  <TickerCard
    title='Conversion'
    contentClass='conversion'
    value={value}
    formatValue={(value) => `${value}%`}
    percentage={-2.3}
  />;
