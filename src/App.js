import React, {useState} from 'react'
import FindPrime from './pages/FindPrime'
import FindAllPrime from './pages/FindAllPrime'
import FindSquareRoot from './pages/FindSquareRoot'
import './App.scss'
import FindSeries from './pages/findFebonacciSeries/findSeries'
import IsNumberFibonacci from './pages/findFebonacciSeries/findNumber'
import FindPowerOfTwo from './pages/FindPowerOfTwo'
import RecursiveFibonacci from './pages/RecursiveFebonacci'
import RecursiveFactorial from './pages/RecursiveFactorial'
import BinarySearch from './pages/BinarySearch'
import BinaryRecursive from './pages/BinaryRecursiveSearch'
import InsertionSort from './pages/InsertionSort'
import QuickSort from './pages/QuickSort'

const tab = [{
    title: 'Find N is prime',
    key: 'findPrime',
    component: <FindPrime />
},
{
    title: 'Find 0 to N is prime.',
    key: 'findTillPrime',
    component: <FindAllPrime />
},
{
    title: 'Find square root of N.',
    key: 'findSquareroot',
    component: <FindSquareRoot />
},
{
    title: 'Find sequence of febonacci numbers.',
    key: 'findFibonacciSequence',
    component: <FindSeries />
},
{
    title: 'Find number is febonacci.',
    key: 'findNumberIsFibonacci',
    component: <IsNumberFibonacci />
},
{
    title: 'Find number is power of 2.',
    key: 'findNumberIsPowerOf2',
    component: <FindPowerOfTwo />
},
{
    title: 'Find n"th fibonacci using recursive.',
    key: 'fibonacciRecursive',
    component: <RecursiveFibonacci />
},
{
    title: 'Find factorial using recursive.',
    key: 'findFactorialUsingRecursive',
    component: <RecursiveFactorial />
},
{
    title: 'Find index using binary search.',
    key: 'binarySearch',
    component: <BinarySearch />
},
{
    title: 'Find index using binary recursive.',
    key: 'binaryRecursive',
    component: <BinaryRecursive />
},
{
    title: 'Insertion sort',
    key: 'insertionSort',
    component: <InsertionSort />
},
{
    title: 'Quick sort using recursive.',
    key: 'quickSort',
    component: <QuickSort />
}
]

export function App(){
    const [curentTab, setCurrentTab] = useState('findPrime')
    const [component, setComponent] = useState(null)
    return(
        <>
            <main>
                <aside>
                    <h2>DSA in javascript</h2>
                    <ul>
                        {
                            tab.map((link)=>{
                                return(
                                    <li 
                                    onClick={()=>{setCurrentTab(link.key); setComponent(link.component)}}
                                    className={curentTab === link.key ? 'active' : ''}>
                                        {link.title}
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </aside>
                <section>
                        {component}
                </section>
            </main>
        </>
    )
}