'use client';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VictimDetection() {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [downloadLink, setDownloadLink] = useState(null);
    const [isDetecting, setIsDetecting] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] as File;
        setVideoFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!videoFile) {
            toast.error("Please select a video file.");
            return;
        }

        setIsDetecting(true); // Start detection process

        const formData = new FormData();
        formData.append("video", videoFile);

        try {
            const response = await fetch("http://localhost:5001/detect", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.output_path) {
                setDownloadLink(data.output_path);
                toast.success("Detection successful! You can now download the file.");
            } else {
                toast.error("Detection failed. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading video:", error);
            toast.error("Error uploading video. Please try again.");
        } finally {
            setIsDetecting(false);
        }
    };

    return (
        <div className="bg-background-theme w-full h-screen overflow-hidden p-10 pt-32 flex flex-col lg:flex-row gap-10">
            <ToastContainer />
            <div className='w-1/3 flex flex-col items-center justify-between bg-modal-theme p-10 rounded-md border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-lg'
                style={{ flexShrink: 0, height: '400px', maxHeight: '400px' }}
            >
                <div className='w-full text-center'>
                    <h1 className="text-white uppercase font-extrabold tracking-wider text-xl">
                        Victim Detection
                    </h1>
                    <hr className='border-0 w-full h-[1px] mt-3 mb-8 bg-blue-theme' />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-full gap-8 h-full justify-between items-center'>
                    <div className='w-full flex flex-col gap-2 font-bold text-white'>
                        <label>Enter the video file</label>
                        <input
                            type="file"
                            accept="video/*"
                            className='w-full bg-modal-theme cursor-pointer text-white border-[1px] tracking-wider px-3 border-blue-theme rounded-md py-3 text-sm transition duration-200 ease-in-out hover:bg-gray-700'
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='flex items-center flex-col justify-center w-full gap-6'>
                        <button
                            type="submit"
                            className={`text-white py-2 flex items-center justify-center font-semibold rounded-md transition duration-200 ease-in-out border-2 border-blue-theme w-full ${isDetecting ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-gray-700'}`}
                            disabled={isDetecting}
                        >
                            {isDetecting ? 'Detecting...' : 'Detect Victims'}
                        </button>
                        <a href={downloadLink ?? ''} className='w-full' download>
                            <button
                                className={`text-white py-2 flex items-center justify-center font-semibold rounded-md transition duration-200 ease-in-out border-2 border-blue-theme w-full ${!downloadLink ? 'opacity-40 cursor-not-allowed' : ''}`}
                                disabled={!downloadLink}
                            >
                                Download
                            </button>
                        </a>
                    </div>
                </form>
            </div>

            <div className='w-2/3 rounded-md px-5 py-2 flex items-center justify-center text-white bg-modal-theme border-[1px] border-blue-theme drop-shadow-md shadow-blue-theme shadow-lg max-h-[24.7rem]'>
                <div className='w-full h-full rounded-sm p-4 tracking-wide font-normal text-lg overflow-hidden'>
                    <h1 className='text-2xl w-full text-center font-bold uppercase tracking-wider sticky top-0 bg-modal-theme z-10'>
                        Workflow: YOLO Algorithm
                    </h1>
                    <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4 sticky top-[2.5rem] z-10' />
                    <div className='overflow-y-auto max-h-[21rem] pb-12'>
                        <p>In this scenario, the YOLO (You Only Look Once) algorithm is used to detect victims in video footage during disaster situations. Here’s a step-by-step breakdown of how the process works.</p>
                        <br />
                        <h1 className='text-xl font-bold mt-5'>Step-by-Step Breakdown:</h1>
                        <hr className='w-full border-0 h-[1px] bg-blue-theme mt-2 mb-4' />
                        <ul className='list-decimal list-inside pr-2 flex flex-col gap-10'>
                            <li className='font-bold'>Video Input
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>Upload: The user uploads a video file (e.g., from a drone capturing disaster-stricken areas).</li>
                                    <li>The system collects this video input via a form where users select a file and submit it.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>Preprocessing
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>Video Handling: Once the video is uploaded, it is temporarily stored on the server.</li>
                                    <li>The video file is formatted to meet the requirements of the YOLO algorithm, ensuring compatibility with the detection model.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>Object Detection using YOLO
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>YOLO Algorithm: YOLO is a deep learning-based object detection algorithm that operates in real-time by dividing the video frames into a grid system. For each grid, it predicts bounding boxes and confidence scores for objects.</li>
                                    <li>Victim Detection: In this case, YOLO is pre-trained or fine-tuned to detect specific objects related to victims (e.g., human figures, people trapped under debris).</li>
                                    <li>Each video frame is passed through the YOLO network, which processes the frames and identifies potential victims by analyzing pixel patterns and shapes.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>Prediction
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>Bounding Box Creation: YOLO draws bounding boxes around detected victims. The algorithm assigns a confidence score to each box, indicating the probability of the object being a human victim.</li>
                                    <li>Class Labels: Each detected object is classified, and the label “victim” is assigned to detected human figures.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>Output Generation
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>Annotated Video: YOLO generates an output video with bounding boxes and labels overlaid on each frame, marking the detected victims.</li>
                                    <li>Output File Path: The processed video is saved, and a link to download the output file is generated.</li>
                                </ul>
                            </li>
                            <li className='font-bold'>Download Process
                                <ul className='pl-10 list-disc list-inside font-light'>
                                    <li>Download Link: The link to the processed video is made available to the user. The user can now download the video file showing victim detection.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};