import { useState } from "react";
import { Search, Filter, Grid, Archive, Rocket, FileText, Delete, X, Pencil, Upload, Link, Clipboard, Book, LogOut, Settings } from "lucide-react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFieldsOpen, setIsFieldsOpen] = useState(false);
    const [selectedFields, setSelectedFields] = useState([]);
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleFilterPopup = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const toggleFieldsPopup = () => {
        setIsFieldsOpen(!isFieldsOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleFieldSelection = (field) => {
        setSelectedFields(prev =>
            prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-[#2F3542] text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <img src="" alt="" className="h-8 w-8" />
                            <span className="text-2xl font-bold text-[#29ABE2] ml-2">Relearn</span>
                        </div>
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-[400px] bg-[#404857] rounded-md pl-10 pr-4 py-2 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <button
                            onClick={toggleProfile}
                            className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center hover:bg-purple-700 transition-colors"
                        >
                            <span className="text-white font-semibold">V</span>
                        </button>

                        {/* Profile Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700 z-50">
                                <button
                                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => {
                                        console.log("Settings clicked");
                                        setIsProfileOpen(false);
                                    }}
                                >
                                    <Settings className="h-4 w-4 mr-2" />
                                    Account Settings
                                </button>
                                <button
                                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                                    onClick={() => {
                                        console.log("Logout clicked");
                                        setIsProfileOpen(false);
                                    }}
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-16 bg-gray-200 shadow-gray-700 hidden md:flex flex-col items-center py-4 space-y-8">
                    <a href="#" className="p-2 rounded-md hover:bg-gray-200">
                        <Clipboard className="h-6 w-6 text-teal-500" />
                    </a>
                    <a href="#" className="p-2 rounded-md hover:bg-gray-200">
                        <Book className="h-6 w-6 text-gray-500" />
                    </a>
                </aside>

                <aside className="w-60 bg-gray-50 border-r border-gray-300 shadow-xl hidden md:block">
                    <div className="p-4 space-y-6">
                        <button
                            onClick={() => setIsNewProjectModalOpen(true)}
                            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-400 transition-colors"
                        >
                            NEW
                        </button>

                        <nav className="space-y-1">
                            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <Rocket className="h-5 w-5 text-gray-500" />
                                <span>Deployed</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">1</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <FileText className="h-5 w-5 text-gray-500" />
                                <span>Draft</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <Archive className="h-5 w-5 text-gray-500" />
                                <span>Archived</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
                            </a>
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
                        <div className="flex items-center space-x-4">
                            <button onClick={toggleFilterPopup} className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                <Filter className="h-5 w-5" />
                                <span>filter</span>
                            </button>
                            <button onClick={toggleFieldsPopup} className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                <Grid className="h-5 w-5" />
                                <span>fields</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                <Archive className="h-5 w-5" />
                                <span>Archive</span>
                            </button>
                            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                <Delete className="h-5 w-5" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>

                    {/* Projects Table */}
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="px-6 py-3 text-left">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Project name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Owner</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date modified</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date deployed</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Submissions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-400 hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Demo Project
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="flex items-center text-blue-600">
                                            <Rocket className="h-4 w-4 mr-1" />
                                            deployed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">me</td>
                                    <td className="px-6 py-4">February 5, 2025</td>
                                    <td className="px-6 py-4">February 5, 2025</td>
                                    <td className="px-6 py-4">1</td>
                                </tr>

                                <tr className="border-b border-gray-400 hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded border-gray-300" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            My Project
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="flex items-center text-blue-600">
                                            <Rocket className="h-4 w-4 mr-1" />
                                            deployed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">me</td>
                                    <td className="px-6 py-4">February 5, 2025</td>
                                    <td className="px-6 py-4">February 5, 2025</td>
                                    <td className="px-6 py-4">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            {/* New Project Modal */}
            {isNewProjectModalOpen && (
                <div className="fixed inset-0 bg-gray-300 opacity-95 flex items-start justify-center pt-16 z-50">
                    <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
                        <div className="flex items-center bg-blue-400 justify-between p-6 border-b">
                            <h2 className="text-2xl font-semibold text-gray-800">Create project: Choose a source</h2>
                            <button
                                onClick={() => setIsNewProjectModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-8">
                                Choose one of the options below to continue. You will be prompted to enter name and other details in further steps.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Pencil className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">Build from scratch</h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <div className="w-8 h-8 bg-gray-600 text-white flex items-center justify-center font-bold rounded mb-4">T</div>
                                    <h3 className="text-lg font-medium text-gray-700">Use a template</h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Upload className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">Upload an XLSForm</h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Link className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">Import an XLSForm via URL</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Popup */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-gray-500 opacity-95 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Filter</h3>
                            <button onClick={toggleFilterPopup} className="text-gray-500 hover:text-gray-700">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Filter by</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option>Select field</option>
                                    <option>Project Name</option>
                                    <option>Description</option>
                                    <option>Status</option>
                                    <option>Owner</option>
                                    <option>Date Modified</option>
                                    <option>Date Deployed</option>
                                    <option>Sector</option>
                                    <option>Country</option>
                                    <option>Languages</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Condition</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option>Select condition</option>
                                    <option>Contains</option>
                                    <option>Does not contain</option>
                                    <option>Ends with</option>
                                    <option>Is</option>
                                    <option>Is not</option>
                                    <option>Starts with</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Value</label>
                                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter value" />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Reset</button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fields Popup */}
            {isFieldsOpen && (
                <div className="fixed inset-0 bg-gray-500 opacity-95 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Select Fields</h3>
                            <button onClick={toggleFieldsPopup} className="text-gray-500 hover:text-gray-700">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {['Project Name', 'Description', 'Status', 'Owner', 'Date Modified', 'Date Deployed', 'Sector', 'Country', 'Languages'].map((field) => (
                                <div key={field} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.includes(field)}
                                        onChange={() => handleFieldSelection(field)}
                                        className="rounded border-gray-300"
                                    />
                                    <span className="ml-2">{field}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-4 mt-6">
                            <button className="px-4 py-2 text-red-600 bg-red-300 hover:bg-red-200 rounded-md">Reset</button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Apply</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
