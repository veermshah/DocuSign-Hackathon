import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
    const searchParams = await props.searchParams;

    return (
        <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-lg">
                <h1 className="text-5xl text-center text-gray-900">Sign in</h1>
                <p className="mt-2 text-center text-3xl text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        className="font-medium text-teal-400 hover:text-teal-700"
                        href="/sign-up"
                    >
                        Sign up
                    </Link>
                </p>
                <form className="mt-6 space-y-6">
                    <div>
                        <Label
                            htmlFor="email"
                            className="block text-3xl font-medium text-gray-700"
                        >
                            Email
                        </Label>
                        <Input
                            name="email"
                            required
                            className="mt-4 block w-full px-6 py-8 text-3xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="password"
                            className="block text-3xl font-medium text-gray-700"
                        >
                            Password
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            required
                            className="mt-4 block w-full px-6 py-8 text-3xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <SubmitButton
                        formAction={signInAction}
                        pendingText="Signing in..."
                        className="w-full py-8 text-3xl bg-teal-400 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign in
                    </SubmitButton>

                    {/* Ensure the error message is displayed below the submit button */}
                    {searchParams?.message && (
                        <div className="mt-4 text-center text-red-600">
                            <FormMessage message={searchParams} />
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
