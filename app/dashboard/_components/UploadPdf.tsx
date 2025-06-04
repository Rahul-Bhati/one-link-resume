"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react"
import { ReactNode, useState } from "react"

interface UploadPdfBtn {
    children: ReactNode;
}

const UploadPdf: React.FC<UploadPdfBtn> = ({ children }) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState<string>('');
    const [open, setOpen] = useState(false);

    const onFileSelct = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) setFile(event.target.files[0]);
    }
    const uploadFile = async () => {
        setLoading(true);
        // console.log(res)

        // API call to get pdf process data
    

        setLoading(false);
        setOpen(false);
    }

    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button className="w-full" onClick={() => setOpen(true)}>+ Upload Pdf file </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>upload you pdf</DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <h2 className="mt-5">Select a file to Upload</h2>
                            <div className="gap-2 p-3 rounded-md border">
                                <input type="file" accept="application/pdf" onChange={(e) => onFileSelct(e)} />
                            </div>
                            <div className="mt-3">
                                <label>File Name *</label>
                                <Input placeholder="enter file name" onChange={(e) => setFileName(e.target.value)} />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="button" onClick={uploadFile} disabled={loading}>
                        {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default UploadPdf