import { Switch, Select, Option } from "@material-tailwind/react";
import { RxDotFilled } from 'react-icons/rx'
import theme1 from '../../assets/radioButton/theme1.png'
import theme2 from '../../assets/radioButton/theme2.png'
import theme3 from '../../assets/radioButton/theme3.png'
import tableview1 from '../../assets/radioButton/tableview1.png'
import tableview2 from '../../assets/radioButton/tableview2.png'



const Main = () => {
    return (
        <div className="mt-2 mb-10 mx-6 h-full px-6 pt-6 border border-transparent border-l-gray-300 border-t-gray-300 rounded-tl-[50px] ">
            <div className="flex items-center">
                <RxDotFilled className='text-3xl' />
                <h1 className="font-bold text-2xl">Settings</h1>
            </div>
            <div className="border-b border-gray-200 mb-6"></div>
            <h2 className="text-xl font-semibold mb-2">Appearance</h2>
            <p className="text-gray-500 mb-6 text-md">
                Change how Untitled UI looks and feels in your browser.
            </p>
            <div className="border-b border-gray-300 mb-6"></div>
            <form>
                <div className="flex">
                    <div className="w-1/3 mr-6 ">
                        <h3 className="text-md font-semibold mb-1 text-gray-600">Interface Theme</h3>
                        <p className="text-gray-500 mb-6">
                            Select or customize your UI theme.
                        </p>
                    </div>
                    <div className="w-2/3">

                        <div className="flex flex-row">
                            <label className="radio-container">
                                <input type="radio" name="option" value="option1" className="hidden" />
                                <img src={theme1} alt="Option 1" className="radio-image" />
                                <span class="radio-label">System preference</span>
                            </label>

                            <label className="radio-container">
                                <input type="radio" name="option" value="option2" className="hidden" />
                                <img src={theme2} alt="Light" className="radio-image" />
                                <span class="radio-label">Light</span>
                            </label>

                            <label className=" radio-container">
                                <input type="radio" name="option" value="option3" className="hidden" />
                                <img src={theme3} alt="Dark" className="radio-image" />
                                <span class="radio-label">Dark</span>
                            </label>

                        </div>


                    </div>
                </div>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex">
                    <div className="w-1/3 mr-6 ">
                        <h3 className="text-md font-semibold mb-1 text-gray-600">Transparent Sidebar</h3>
                        <p className="text-gray-500 mb-6">
                            Make the desktop sidebar transparent.
                        </p>
                    </div>
                    <div className="w-2/3">
                        <Switch defaultChecked />
                    </div>
                </div>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex">
                    <div className="w-1/3 mr-6 ">
                        <h3 className="text-md font-semibold mb-1 text-gray-600">Sidebar Feature</h3>
                        <p className="text-gray-500 mb-6">
                            What shows in desktop sidebar.
                        </p>
                    </div>
                    <div className="w-1/5 ">
                        <Select label="Sidebar">
                            <Option>recent changes</Option>
                            <Option>option 1</Option>
                            <Option>option 2</Option>
                            <Option>option 3</Option>
                            <Option>option 4</Option>
                        </Select>
                    </div>
                </div>
                <div className="border-b border-gray-300 mb-6"></div>
                <div className="flex">
                    <div className="w-1/3 mr-6 ">
                        <h3 className="text-md font-semibold mb-1 text-gray-600">Tables View</h3>
                        <p className="text-gray-500 mb-6">
                            How are tables displayed in the app.
                        </p>
                    </div>
                    <div className="w-2/3">
                        <div className="flex flex-row">
                            <label className="radio-container">
                                <input type="radio" name="option" value="option2" className="hidden" />
                                <img src={tableview1} alt="Default" className="radio-image" />
                                <span class="radio-label">Default</span>
                            </label>

                            <label className="radio-container">
                                <input type="radio" name="option" value="option3" className="hidden" />
                                <img src={tableview2} alt="Compact" className="radio-image" />
                                <span class="radio-label">Compact</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <button className="mr-2 bg-gray-100 hover:bg-gray-300 text-black py-2 px-4 rounded-lg">
                        Cancel
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                        Save Changes
                    </button>
                </div>
            </form>


        </div>
    )
}

export default Main