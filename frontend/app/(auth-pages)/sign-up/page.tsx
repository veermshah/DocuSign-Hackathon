import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
    searchParams: Promise<Message>;
}) {
    const searchParams = await props.searchParams;

    if ("message" in searchParams) {
        return (
            <div>
                <FormMessage message={searchParams} />
            </div>
        );
    }

    return (
        <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-lg">
                <h1 className="text-5xl text-center text-gray-900">Sign up</h1>
                <p className="mt-2 text-center text-3xl text-gray-600">
                    Already have an account?{" "}
                    <Link
                        className="font-medium text-teal-400 hover:text-teal-700"
                        href="/sign-in"
                    >
                        Sign in
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
                            minLength={6}
                            required
                            className="mt-4 block w-full px-6 py-8 text-3xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <SubmitButton
                        formAction={signUpAction}
                        pendingText="Signing up..."
                        className="w-full py-8 text-3xl bg-teal-400 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign up
                    </SubmitButton>
                    {searchParams?.message && (
                        <FormMessage message={searchParams} />
                    )}
                </form>
            </div>
        </div>
    );
}
