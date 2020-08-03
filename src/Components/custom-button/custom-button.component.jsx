import React from 'react' ;

import {CustomButtonCOmponent} from './cutom-button.styles';

const CustomButton =({children,...props}) => (
 <CustomButtonCOmponent 
 {...props}
 >
 {children}
 
 </CustomButtonCOmponent>
)

export default CustomButton;