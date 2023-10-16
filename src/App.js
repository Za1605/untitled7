import React from 'react';

import Simpson from "./Simpsons/Sipson";


const App = () => {
    return (
        <div>
            <Simpson name={'Bart'} age={10} photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpson name={'Homer'} age={40,} photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} age={38} photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'} age={9} photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
           <Simpson name={'Maggie'} age={1} photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export default App;



