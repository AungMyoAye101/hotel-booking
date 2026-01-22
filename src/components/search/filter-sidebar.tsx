
import { Card, CardBody, Checkbox, CheckboxGroup, cn, Input, Radio, RadioGroup, Slider } from '@heroui/react'
import { useState } from 'react'


// import { SearchPropsType } from './SideBar'



export const priceRange = [{
    name: "minPrice",
    label: "Min price"
}, {
    name: "maxPrice",
    label: "Max price"
}]

export const starCheckBoxes = {
    name: "rating",
    fields: [{ value: 5, label: "5 Stars" }, { value: 4, label: "4 Stars" }, { value: 3, label: "3 Stars" }, { value: 2, label: "2 Stars" }, { value: 1, label: "1 Stars" }]
}

export const ratingOrder = [
    {

        label: "Highest to Lowest rating",
        value: "highestToHighRating",
    }, {

        label: "Lowest to Highest rating",
        value: "lowestToHightRating",


    }

]

const priceOrder = [{
    label: "Highest to Lowest price",
    value: "highestToLowestPrice",

}, {

    label: "Lowest to Highest price",
    value: "lowestToHighestPrice",


}]




const SideBar = ({ searchParams, handleChange }: any) => {
    const [isOpen, setIsOpen] = useState(true)


    return (
        <Card radius='sm' shadow='md' className='border-2 border-slate-200' >
            <CardBody  >
                <div className='flex flex-col gap-6 p-4 max-w-sm'>

                    <Input
                        type='text'
                        label='Search by Destination'
                        labelPlacement='outside'
                        placeholder='destination'
                        name='destination'
                        radius='sm'
                        value={searchParams.get('destination') || ''}
                        onChange={handleChange}
                    />




                    <div>
                        <Slider
                            className='w-60'
                            defaultValue={[100, 300]}
                            formatOptions={{ style: "currency", currency: "USD" }}
                            label="Price Range"
                            maxValue={1000}
                            minValue={0}

                            step={10}
                            color='secondary'

                        />
                    </div>

                    {/* sort by price order */}
                    <RadioGroup label='Sort by price order'>
                        {
                            priceOrder.map(field => (
                                <Radio value={field.value} key={field.value} color='secondary' >
                                    <span className='text-sm ml-1'>
                                        {field.label}
                                    </span>
                                </Radio>
                            ))
                        }
                    </RadioGroup>


                    {/* Sort by stars */}
                    <div>
                        <CheckboxGroup label="Sort by stars">

                            {
                                starCheckBoxes.fields.map((field) => (
                                    <Checkbox
                                        key={field.value}
                                        value={field.value.toString()}
                                        color='secondary'
                                    >
                                        <span className='text-sm ml-1'>
                                            {field.label}
                                        </span>
                                    </Checkbox>
                                ))
                            }
                        </CheckboxGroup>
                    </div>
                    {/* Sorting by rating */}
                    <div>

                        <RadioGroup label='Sort by rating order' >
                            {
                                ratingOrder.map(field => (
                                    <Radio
                                        key={field.value}
                                        value={field.value}
                                        color='secondary'
                                    >
                                        <span className='text-sm ml-1'>
                                            {field.label}
                                        </span>
                                    </Radio>
                                ))
                            }
                        </RadioGroup>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default SideBar


