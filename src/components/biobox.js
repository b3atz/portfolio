import * as React from 'react';

const Biobox = ({child}) => (
    <div className='square'>
        <div>
            <table>
                <tr>
                    <td style={{ 
                            width: '60%',
                            }}>
                        <p>{child}</p>
                    </td>
                    <td style={{ 
                        width: '40%',
                        }}>
                        <img src={'IMG_3513.jpeg'} className="imgprof" alt="Me by the river"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
)

export default Biobox;
