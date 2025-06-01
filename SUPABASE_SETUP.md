# Supabase Setup Instructions

This project is set up to use Supabase for handling contact form submissions. Here's how to set it up:

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Note down your project URL and anon key

## 2. Set Up Environment Variables

Create a `.env.local` file in your project root and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace the placeholder values with your actual Supabase credentials.

## 3. Create the Contact Messages Table

In your Supabase dashboard, go to the SQL Editor and run this query:

```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
FOR INSERT WITH CHECK (true);
```

## 4. Update the Contact Form

Once you have Supabase set up, replace the handleContactSubmit function in `app/page.tsx` with:

```javascript
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitMessage('')

  try {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitMessage('Please fill in all fields.')
      return
    }

    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message
        }
      ])

    if (error) {
      throw error
    }

    setSubmitMessage('Thank you for your message! We will get back to you soon.')
    setContactForm({ name: '', email: '', message: '' })
    
  } catch (error) {
    setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

Don't forget to import the supabase client at the top of the file:

```javascript
import { supabase } from '@/lib/supabase'
```

## 5. Install Dependencies

The Supabase client should already be installed. If not, run:

```bash
npm install @supabase/supabase-js
```

## Current Status

The contact form is currently set up with a placeholder submission handler. Once you complete the Supabase setup above, replace the current handler with the one provided in step 4. 