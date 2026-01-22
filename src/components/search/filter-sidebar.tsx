
import { Card, CardBody, Checkbox, CheckboxGroup, cn, Input, Radio, RadioGroup, Slider } from '@heroui/react'
import { useDebouncedCallback } from 'use-debounce'


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
        value: "asc",
    }, {

        label: "Lowest to Highest rating",
        value: "desc",


    }

]

const priceOrder = [{
    label: "Highest to Lowest price",
    value: 'asc',

}, {

    label: "Lowest to Highest price",
    value: 'desc',


}]


type Props = {
    searchParams: URLSearchParams,
    updateParams: (name: string, value: string) => void
}

const SideBar = ({ searchParams, updateParams }: Props) => {

    const handleDestinationChange = useDebouncedCallback((value: string) => {
        updateParams("destination", value)
    }, 500)

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
                        defaultValue={searchParams.get('destination') || ''}
                        onChange={(e) => handleDestinationChange(e.target.value)}
                    />




                    <div>
                        <Slider
                            className='w-60'
                            defaultValue={[
                                Number(searchParams.get("minPrice")) ?? 100,
                                Number(searchParams.get("maxPrice")) ?? 300]}
                            formatOptions={{ style: "currency", currency: "USD" }}
                            label="Price Range"
                            maxValue={1000}
                            minValue={0}
                            onChangeEnd={([min, max]) => {

                                updateParams("minPrice", min)
                                updateParams("maxPrice", max)

                            }}
                            step={10}
                            color='secondary'

                        />
                    </div>

                    {/* sort by price order */}
                    <RadioGroup
                        defaultValue={searchParams.get('priceOrder') ?? 'asc'}
                        onChange={(e) => updateParams('priceOrder', e.target.value)

                        }
                        label='Sort by price order'
                    >
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
                        <CheckboxGroup
                            defaultValue={searchParams.getAll('star')}
                            onChange={(values) => updateParams('star', values)}
                            label="Sort by stars">

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


                    <RadioGroup
                        defaultValue={searchParams.get('rating') ?? "asc"}
                        onChange={(e) => updateParams("rating", e.target.value)}
                        label='Sort by rating order'
                    >
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
            </CardBody>
        </Card>
    )
}

export default SideBar


