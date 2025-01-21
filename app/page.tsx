import Form from 'next/form'

export default function Home() {
  return (
    <Form action="/game" >
      <input type="hidden" value={"abc"} id="abc" name='abc'/>
      <button type='submit'>Submit</button>
    </Form>
  );
}
