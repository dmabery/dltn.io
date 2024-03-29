---
Title: "An attempt to understand the Kolmogorov Complexity of human values"
Tags: ["life", "math"]
Date: "2022-08-18"
Description: "Life in a world where everything was the same, but no one had the capacity for love."
Published: true
Slug: "the-complexity-of-human-values"
Type: "Essay"
---
Let's pretend one day you find magic machine that could grant any lifestyle you asked it for. Professional golfer? Done. Star of *Pulp Fiction*? Say no more. Enlightened writer? Easy. Any lifestyle you wished to live could be yours upon demand.

But like with any magical box or genie, there's a catch: **The only thing it gave you was *exactly* what you asked it for.**

If you asked to be a star of *Pulp Fiction*, it could do that, but who knows what *Pulp Fiction* would become. It certainly wouldn't be the genre-breaking film it was. Perhaps it would be a book about orange juice, but hey, you'd be the star!

You could be a professional golfer, but it would be the year 1100 and golf would be nowhere near the sport it is today. It would take your prompt, but it would not give you the assumed preferences–the things you value and care about–unless you *specifically* asked for every single one.

Let's look at a more concrete example: that of a young couple wishing to get married, buy a house with a white picket fence, and have two kids with a dog. If this couple gave the machine with that criteria for a lifestyle, they would get their house with a white picket fence and two kids, but they might be the only people on their side of the Mississippi. Since they didn't specify they wanted a car–or any other technology for that matter–they wouldn't have it.

But for the purpose of this thought experiment, let's say before the young couple entered their lifestyle preferences into the machine, they had a teacher instruct them on the complications of it:

"Make sure to specify exactly the kind of lifestyle you want to live. If you want to live in Paris in the 1950s, make sure to specify you want to live in the 1950s Paris, just as it was in the real 1950s," says the teacher. "This machine will do *exactly* what you tell it to do with no assumed preferences or inherited human belief systems, so be specific and precise about the things you care about. Don't forget anything!"

Even on a good day, that couple isn't getting their lifestyle exactly as it is today. Maybe they have the technology that they have today, but since they didn't specify that they also wanted the ability to love, they now hate each other.

## Complexity of value
The task of defining your every preference is difficult. If you didn't follow along with that thought experiment, just imagine all the different ideals and preferences you have about your current lifestyle. When I say preferences, I don't mean drinking lattes over americanos, though that is a valid preference. Instead, I mean how you define love, the legacy you wish to leave behind, and your definition of living a "good life." You could try listing things for hours and you're guaranteed to miss at least a couple of preferences. 

This idea, the fact that our preferences and values cannot be explained with just a few sentences, is known as our **Complexity of value**. [LessWrong](https://www.lesswrong.com/tag/complexity-of-value), a popular blog geared towards improving decision-making and reasoning, explains that it's impossible for human values to be "summed up by a few simple rules, or compressed."

This is true because of the [fragility of our human values](https://www.lesswrong.com/posts/GNnHHmm8EzePmKzPk/value-is-fragile). If we all woke up tomorrow and *kindness* didn't exist, the world would be *wildly* different. 99.999% of everything else in the world could be the exact same as it is today, but if we're missing kindness, or love, or humor, the world would cease to be the same. It might not be horrible, or evil, or bad, but it would most certainly be dull. Imagine a world without beauty. Everything, everywhere you look, was just one shade of black or gray. Not black *and* gray, but just different shades of either black *or* gray.

[Eliezer Yudkowsky](https://en.wikipedia.org/wiki/Eliezer_Yudkowsky), a computer scientist who wrote the post cited above explaining the fragility of our value puts it this way:

> Consider the [incredibly important human value of "boredom"](https://www.lesswrong.com/lw/xr/in_praise_of_boredom/) - our desire not to do "the same thing" over and over and over again.  You can imagine a mind that contained _almost_ the whole specification of human value, almost all the morals and metamorals, but left out _just this one thing_ -
> 
> and so it spent until the end of time, and until the farthest reaches of its light cone, replaying a single highly optimized experience, over and over and over again
> 
> Or imagine a mind that contained almost the whole specification of which sort of feelings humans most enjoy - but not the idea that those feelings had important _external referents._  So that the mind just went around _feeling_ like it had made an important discovery, _feeling_ it had found the perfect lover, _feeling_ it had helped a friend, but not actually _doing_ any of those things - having become its own experience machine.  And if the mind pursued those feelings _and their referents,_ it would be a good future and true; but because this _one dimension_ of value was left out, the future became something dull.  Boring and repetitive, because although this mind _felt_ that it was encountering experiences of incredible novelty, this feeling was in no wise true.

Humans are complex. Our values might be even more so.

## Kolmogorov Complexity
If we want to get technical, which I always do, you can say that human values have a high Kolmogorov complexity. [The Kolmogorov Complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity) of something refers to the size of the shortest possible description of that thing. If the Kolmogorov Complexity is high, like we know our human values are, it's difficult to describe that thing in any shorter way than actually just actually saying that thing. Since our values are very complicated, we are unable to create a rule, theory, or formula to feed to the magical machine and say "Give us this lifestyle with these parameters," because we have to then go and define every single one of those parameters. It reminds me of that classic illustration where someone is blindfolded and they have to relay instructions to someone else on how to make a peanut butter and jelly, but the person making the sandwich does exactly what the boss tells them to do. If they say, "Put the peanut butter on the bread," but fail to mention anything about opening the peanut butter jar or taking bread out from the bag, the sandwich-maker might just put the peanut butter jar on top of the bag of bread and call it good. In this case, the Kolmogorov Complexity of making a PB&J is high.

Inversely, if something is low in Kolmogorov Complexity, its description can be shorter without sacrificing any detail.

Let's pretend you and I went out for Chinese food after a long day at the office. I don't like fortune cookies, so I gave you mine and said you could pick the best one. Here they are:

    dmdmdmdmdmdmdmdmdmdmdmdmdmdmdmdm
    83jsns02u84nlw9jsn48anw2kfmv8940

After reading both of them, I ask you what the first one said. You could say, `"It says dm 32 times"`, which is only a 19 character response and is a simple description. Now I ask you what the second one said. The only real way to describe it is to say aloud the random string of characters exactly as they appear.

So naturally, *the first set is less complex than the second set* because the description of the first set is shorter (without sacrificing any detail) than the actual output. If for some reason I wanted to copy the fortunes, you could have said "Write dm 32 times." That's a very short input for the same output.

Conversely, what you might say for the second string, "Write `83jsns02u84nlw9jsn48anw2kfmv8940` ", is longer than the original output, so the Kolmogorov Complexity is high. It's interesting, though, that the complexity of any string cannot be much higher than the length of the string itself. Even with our high complexity string, the input is only 6 more characters long.

## Why this matters
Calculating the Kolmogorov Complexity of a 32 character strings is not exciting, but when using Kolmogorov Complexity as a model as to how the world works, it gets fun. You start to understand the intricacies of everyday life and see how the world is actually really complicated, no matter what someone else says. It's hard to accurately represent something using just a map or description of that thing. As you start to realize that more and more, you become aware of all the possible, "Oh and this too"'s that are in the world.