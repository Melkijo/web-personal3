import { QuestionIcon } from "@/components/icon";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-96 flex flex-col items-center mt-10 md:mt-20">
        <div className="w-full mb-8">
          <h1 className="font-display text-3xl md:text-4xl mb-5">
            WANT TO WORK WITH ME?
          </h1>
          <p className="w-full md:w-2/3 text-lg">
            Please fill out the form below to arrange a call or quote from me. I
            typically reply to enquiries within 48 hours.
          </p>
        </div>

        <div className="w-full">
          <form action="">
            <div className="grid grid-cols-2 gap-6 mb-7">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="your name" />
              </div>
              <div>
                <Label htmlFor="name">Email</Label>

                <Input type="email" id="email" placeholder="your email" />
              </div>
            </div>
            <div className="mb-7">
              <div className="flex gap-1 items-center">
                <Label htmlFor="description">Description</Label>
                {/* <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <QuestionIcon width={20} height={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to library</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider> */}
              </div>

              <Textarea placeholder="Type your message here." />
            </div>

            <Button type="submit">Hit and Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}
