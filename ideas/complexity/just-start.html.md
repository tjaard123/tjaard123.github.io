# Just Start

Main outline idea

* An image demonstrating the waste of waterfall vs build-measure-learn
* Maybe use the two principles to introduce the problem, but do it briefly
* Why traditional doesn't work
* Just start with build is enough here, the how is for later posts

## Picture

```
Analyze
      Build
          Test
              Deploy
```

A lot of waste, late learning & value

## Two Principles

I recently did an in depth analysis, by that I mean a few SQL queries on productio... I mean, on a QA server, and some focused consideration while waiting in the lunch queue.  Anyway, I had proof of something we all know intuitively, the disconnect between scope and value:

![alt text](/posts/just-start/scope-vs-value.png "Scope vs. Value")

This is a real online banking system.  For scope I used total story points and value is how much it's been used, this is pretty bad science, but I'm making a simple point.  We didn't spend a lot of effort on statements but it turned out to be pretty valuable.  This is such an old idea it has a rule, a [book](https://www.amazon.com/80-20-Principle-Secret-Achieving/dp/0385491743), a [wikipedia post](https://en.wikipedia.org/wiki/Pareto_principle) and a [small cult-like following](https://www.synthesis.co.za/people/) in East Brazil.  It's the 80/20 rule.  My translation for software:

> 20% of the effort could unlock 80% of the value

Yet, we often spend our effort on non-relevant trivial issues, because it's easy to understand and visualize, commonly referred to as ["Bike-shedding"](https://en.wikipedia.org/wiki/Law_of_triviality).  Unfortunately, the majestic 20% is usually not found within the trivial, but within the complex.  It's a little like this:

![alt text](/posts/just-start/complexity-vs-value.png "Scope vs. Value")

How do we focus our efforts at the complex?


## 2. Traditional solution



The traditional software forecast approach was to analyze for months and still venture a guess while building in a lot of leeway for change.

## 3. What's wrong with that?

### Waste
1. The artefacts produced with analysis is more wasteful than they are useful
1. Your environment changes while you're analysing rendering your analysis void.  Environment change is an opportunity
1. Building, testing, experimenting make analysis better, visa-verca - not so much.  When you finally get to building you realize you have to rework which is waste

### Bad UX
1. You can't learn, measure feedback because it's only at the end.  This renders a bad UX
1. You don't yet know if you're even analysing the correct thing.




Align effort to max value

## 4. Agile solution

Build-measure-learn feedback loop

## 5. How?
