# skills

My personal skills.

> "I don't even have any good skills...You know, like nunchuck skills, bow
> hunting skills, computer hacking skills. Girls only want boyfriends who have
> great skills." - Napoleon Dynamite

## Goals

I use this repository to help me with my skills related to code, including:

- Keeping existing skills strong.
- Learning new skills.
- Sharing skills with others.

## Principles

I use some principles to help me when working with code, including:

- Recognizing trade-offs.
- Identifying root problems before solutions.
- Breaking problems into small pieces.
- Avoiding abstracting until clear.

For example:

- Stable over new.
- Classic over innovative.
- Foundational over trending.
- Standard over custom.
- Native over dependencies.
- Defaults over configuration.
- Simple over flexible.
- Direct over layers.
- Concrete over generic.
- Declarative over imperative.
- Deterministic over stateful.
- Static over runtime.
- Fast over portable.
- Lightweight over powerful.
- Semantic over visual.
- Iteration over overhaul.

> "Although {some 3rd party thing} looks exciting, I feel the value may not be
> worth the cost. I would suggest that we stick with {some official thing} instead
> for the stability trade-off."

> "It sounds like the problem we are trying to solve is that end users need to
> be able to submit a date with this form so that they can know what day to plan
> on. I would suggest that we use the native `<input type="date">` instead of
> adding a custom 3rd party date picker. We'd likely be giving up some
> flexibility and features in exchange for lower maintenance and operating
> system integrations like device specific inputs, GPU accelerated performance,
> improved accessibility and localization, and any other improvements that
> devices and browsers add in the future without extra maintenance costs on our
> end."

> "Perhaps {that} runtime error is a symptom of {this} runtime error? I'd
> suggest creating a minimal reproducible example to confirm."

> "This card feels like it is getting a bit large. I'd suggest splitting it up
> into three separate cards, one for the interface, one for the implementation,
> and one for the integration."

> "So we know that we want to encapsulate the complexity of converting user
> input into a data structure. We could make that flexible based on the users
> choice, but what if we first ship without that option and then we can add that
> later if it becomes a problem?".

> "If we were to change the type of the accounts from a string separated by
> commas into an array of objects, we would be able to verify that the shape of
> the accounts is what we expect at compile time. But that would be a breaking
> change to our public facing interface. It looks like we have 42 consumers of
> this package. Does the value outweigh the cost?"

> "Since we've had a regression, how about we move this logic into a module. We
> could expose an interface where the consumer provides an object as the input
> and it returns a string as the output. We could write some tests for the
> interface to make sure that it can handle when there is no input or when the
> object has more fields than we expected as well as some baseline situations.
> Those tests would then run in CI so that we won't be able to merge a pull
> request if we accidentally break the interface."

> "It looks like we need this logic in 42 other projects. What if we encapsulate
> it in a package with tests and a changelog and then we could use semantic
> versioning to iterate on it going forward?"

> "Perhaps we could measure this to make sure this is the performance bottleneck
> before we make this change? Otherwise I feel it may add unnecessary complexity
> where the value may not be worth the cost."

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
