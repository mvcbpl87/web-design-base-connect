"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CustomLinkButton } from "@/components/global/link-button"

const FormSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    message: z.string()
});

export type ContactFormSchemaType = z.infer<typeof FormSchema>;

const isEmpty = (item: string) => (item === '' ? true: false) 
export default function ContactForm(){
 const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues:{
        fullName:'',
        email:'',
        phoneNumber:'',
        message:''
    }
 });

 const onSubmit = (values:ContactFormSchemaType) =>{
    const {fullName, email, phoneNumber, message} = values;
    if( isEmpty(fullName) || isEmpty(email) 
        || isEmpty(phoneNumber) || isEmpty(message)) return;
    
    try{
     console.log(values)
    }catch(err){
     console.log(err)
    }
 }
 return(
 <Form {...form} >
  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-[2rem]">
   <FormField
     control = { form.control}
     name = "fullName"
     render = { ({field}) => (
        <FormItem>
         <FormLabel>Fullname</FormLabel>
         <FormControl>
          <Input 
           className="rounded-none border-black dark:border-white" 
           placeholder="full name" 
           {...field}/>
         </FormControl>
         <FormMessage/>
        </FormItem>
     )}
   />
    <FormField
     control = { form.control}
     name = "email"
     render = { ({field}) => (
        <FormItem>
         <FormLabel>Email Address</FormLabel>
         <FormControl>
          <Input 
           className="rounded-none border-black dark:border-white" 
           placeholder="email address" 
           {...field}/>
         </FormControl>
         <FormMessage/>
        </FormItem>
     )}
   />
    <FormField
     control = { form.control}
     name = "phoneNumber"
     render = { ({field}) => (
        <FormItem>
         <FormLabel>Phone Number</FormLabel>
         <FormControl>
          <Input 
           className="rounded-none border-black dark:border-white" 
           placeholder="phone number" 
           {...field}/>
         </FormControl>
         <FormMessage/>
        </FormItem>
     )}
   />
    <FormField
     control = { form.control}
     name = "message"
     render = { ({field}) => (
        <FormItem>
         <FormLabel>Message*</FormLabel>
         <FormControl>
           <Textarea   {...field} 
            placeholder="Type your message..." 
            className="rounded-none border-black dark:border-white " 
            minHeight="min-h-[180px]"
           />
         </FormControl>
         <FormMessage/>
        </FormItem>
     )}
   />
   <div className="flex items-center gap-2">
    <Checkbox id="terms" className="rounded-none" />
    <label
     htmlFor="terms"
     className="text-sm font-regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
     I agree to the Terms
    </label>
   </div>
   <div>
    <Button 
        type="submit" 
        variant="outline" 
        className="p-6 bg-accent-base rounded-none text-white ">
        Send
    </Button>
   </div>
  

   <span className="font-semibold text-base">OR</span>
   <div>
    <CustomLinkButton path="#" label="Schedule a Consultation" variant="secondary"/>
   </div>
  </form>
 </Form>
 )
}