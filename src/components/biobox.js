import * as React from 'react';

const Biobox = ({child}) => (
    <div className='square'>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{ 
                                width: '60%',
                                }}>
                            <p>{child}</p>
                        </td>
                        <td style={{ 
                            width: '40%',
                            }}>
                            <img src={'IMG_3513.jpeg'} className="imgprof imgshadow" alt="Me by the river"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Biobox;
