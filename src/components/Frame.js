import React from 'react';
import Roll from './Roll';

const Frame = ({rolls}) => (
  <table>
    <tbody>
      <tr>
        { rolls.map(roll =>
          <Roll label={roll.label} key={roll.id} />
        )}
      </tr>
      <tr>
        <td colSpan={rolls.length}>{rolls.reduce((memo, next) => memo.value + next.value)}</td>
      </tr>
    </tbody>
  </table>
);

export default Frame;
