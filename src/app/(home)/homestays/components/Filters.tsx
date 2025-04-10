import CheckboxDemo from './Checkbox';

const Filters = () => {
    return (
        <div className='flex flex-wrap justify-between w-4/5 sm:flex-col gap-5'>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">location</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo filterBy={{ location: 'dhaka' }} />
                    <CheckboxDemo filterBy={{ location: 'chattagram' }} />
                    <CheckboxDemo filterBy={{ location: 'sylhet' }} />
                    <CheckboxDemo filterBy={{ location: 'khulna' }} />
                    <CheckboxDemo filterBy={{ location: 'barishal' }} />
                    <CheckboxDemo filterBy={{ location: 'rangpur' }} />
                    <CheckboxDemo filterBy={{ location: 'rajshahi' }} />
                    <CheckboxDemo filterBy={{ location: 'mymensing' }} />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">Price</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo filterBy={{ price: '৳ 0 - ৳ 1000' }} />
                    <CheckboxDemo filterBy={{ price: '৳ 1001 - ৳ 2000' }} />
                    <CheckboxDemo filterBy={{ price: '৳ 2001 - ৳ 3000' }} />
                    <CheckboxDemo filterBy={{ price: '৳ 3001 - more' }} />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">Property Type</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo filterBy={{ type: 'apartment' }} />
                    <CheckboxDemo filterBy={{ type: 'house' }} />
                    <CheckboxDemo filterBy={{ type: 'cottage' }} />
                    <CheckboxDemo filterBy={{ type: 'cabin' }} />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">User Rating</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo filterBy={{ rating: "excelent: 4.5+" }} />
                    <CheckboxDemo filterBy={{ rating: "very good: 4.0+" }} />
                    <CheckboxDemo filterBy={{ rating: "good: 3.5+" }} />
                </div>
            </div>
        </div>
    );
}

export default Filters;
