import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 140,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function PythonCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Foundations", "Page 2: Intermediate & Advanced"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          Python{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Syntax · Data Structures · OOP · Standard Library — 2026 Edition
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1: Foundations */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 1 — Core Syntax & Basics */}
          <SectionCard number="1" title="Core Syntax & Basics">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Python 3.12+</Tag><Tag color="#3a6ea5">Dynamic Typing</Tag>
            </div>
            <Code>{`# Variables & assignment
name = "Alice"        # str
age = 30              # int
pi = 3.14159          # float
active = True         # bool
nothing = None        # NoneType`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Indentation (4 spaces) defines code blocks — no braces</Bullet>
              <Bullet>Comments: <code>#</code> single-line, <code>"""..."""</code> docstrings</Bullet>
              <Bullet><strong>Type conversions:</strong> <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code>, <code>list()</code></Bullet>
              <Bullet><code>type(x)</code> returns type, <code>isinstance(x, int)</code> checks type</Bullet>
            </div>
          </SectionCard>

          {/* Section 2 — Numeric Types & Operators */}
          <SectionCard number="2" title="Numeric Types & Operators">
            <RefRow cmd="+" desc="Addition" />
            <RefRow cmd="-" desc="Subtraction" />
            <RefRow cmd="*" desc="Multiplication" />
            <RefRow cmd="/" desc="True division (returns float)" />
            <RefRow cmd="//" desc="Floor division (rounds down)" />
            <RefRow cmd="%" desc="Modulo (remainder)" />
            <RefRow cmd="**" desc="Exponentiation" />
            <div style={{ marginTop: 8 }}>
              <KV k="Comparison" v="==  !=  <  >  <=  >=" />
              <KV k="Logical" v="and  or  not" />
              <KV k="Bitwise" v="&  |  ^  ~  <<  >>" />
              <KV k="Identity" v="is  is not (check object identity)" />
              <KV k="Membership" v="in  not in (check containment)" />
            </div>
          </SectionCard>

          {/* Section 3 — Strings & Formatting */}
          <SectionCard number="3" title="Strings & Formatting">
            <Code>{`# f-strings (recommended)
f"Hello {name}, age {age+1}"
f"{price:.2f}"      # 2 decimals
f"{name!r}"         # repr format
f"{val:>10}"        # right-align, width 10
f"{num:,}"          # thousands separator
f"{num:08b}"        # binary, 0-padded`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd=".strip()" desc="Remove leading/trailing whitespace" />
              <RefRow cmd=".split(sep)" desc="Split into list by separator" />
              <RefRow cmd=".join(lst)" desc='Join list: ", ".join(lst)' />
              <RefRow cmd=".replace(a,b)" desc="Replace all occurrences of a with b" />
              <RefRow cmd=".startswith()" desc="Check string prefix (also endswith)" />
              <RefRow cmd=".upper()" desc="Uppercase (also .lower(), .title())" />
              <RefRow cmd=".find(sub)" desc="Index of substring, -1 if not found" />
            </div>
            <div style={{ marginTop: 6 }}>
              <Bullet>Slicing: <code>s[1:5]</code>, <code>s[::-1]</code> (reverse), <code>s[::2]</code> (every 2nd)</Bullet>
              <Bullet>Raw strings: <code>r"C:\new\dir"</code> — backslashes literal</Bullet>
            </div>
          </SectionCard>

          {/* Section 4 — Lists & Tuples */}
          <SectionCard number="4" title="Lists & Tuples">
            <Code>{`# Lists — mutable, ordered
nums = [1, 2, 3, 4, 5]
nums.append(6)        # add to end
nums.insert(0, 0)     # insert at index
nums.extend([7, 8])   # add multiple
nums.pop()            # remove & return last
nums.remove(3)        # remove first occurrence

# Tuples — immutable, ordered
point = (3, 4)
x, y = point         # unpacking`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd=".sort()" desc="Sort in-place (sorted() returns new)" />
              <RefRow cmd=".reverse()" desc="Reverse in-place" />
              <RefRow cmd=".index(val)" desc="First index of value" />
              <RefRow cmd=".count(val)" desc="Count occurrences" />
              <RefRow cmd="[1:3]" desc="Slice: elements at index 1, 2" />
            </div>
            <Bullet><strong>Unpacking:</strong> <code>a, *rest, z = [1,2,3,4,5]</code></Bullet>
          </SectionCard>

          {/* Section 5 — Dictionaries & Sets */}
          <SectionCard number="5" title="Dictionaries & Sets">
            <Code>{`# Dicts — key:value pairs
d = {"name": "Alice", "age": 30}
d["email"] = "a@b.com"  # add/update
d.get("phone", "N/A")   # safe access
d.pop("age")             # remove key
d.keys()  d.values()  d.items()

# Sets — unique, unordered
s = {1, 2, 3}
s.add(4)    s.discard(2)`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Union" v="a | b  or  a.union(b)" />
              <KV k="Intersection" v="a & b  or  a.intersection(b)" />
              <KV k="Difference" v="a - b  or  a.difference(b)" />
              <KV k="Symmetric diff" v="a ^ b  (in one but not both)" />
              <KV k="Subset check" v="a <= b  or  a.issubset(b)" />
            </div>
            <Bullet>Dict merge (3.9+): <code>merged = d1 | d2</code></Bullet>
          </SectionCard>

          {/* Section 6 — Control Flow */}
          <SectionCard number="6" title="Control Flow">
            <Code>{`# Conditional
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

# Ternary expression
result = "yes" if condition else "no"

# Match/case (3.10+)
match command:
    case "quit":
        sys.exit()
    case "hello" | "hi":
        greet()
    case _:
        unknown()`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>for loop:</strong> <code>for item in iterable:</code></Bullet>
              <Bullet><strong>while loop:</strong> <code>while condition:</code></Bullet>
              <Bullet><code>break</code> exits loop, <code>continue</code> skips to next iteration</Bullet>
              <Bullet><code>for/else</code> — else block runs if loop completes without break</Bullet>
              <Bullet><code>range(start, stop, step)</code> — generates integer sequence</Bullet>
            </div>
          </SectionCard>

          {/* Section 7 — Comprehensions */}
          <SectionCard number="7" title="Comprehensions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Concise syntax for creating collections from iterables.
            </div>
            <Code>{`# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in nums if x % 2 == 0]

# Dict comprehension
word_len = {w: len(w) for w in words}

# Set comprehension
unique = {x.lower() for x in names}

# Generator expression (lazy)
total = sum(x**2 for x in range(1000))

# Nested comprehension
flat = [x for row in matrix for x in row]

# With condition + transform
caps = [w.upper() for w in words
        if len(w) > 3]`}</Code>
            <Bullet>Generator expressions use <code>()</code> — memory efficient for large data</Bullet>
            <Bullet>Avoid deeply nested comprehensions — use loops for readability</Bullet>
          </SectionCard>

          {/* Section 8 — Functions */}
          <SectionCard number="8" title="Functions">
            <Code>{`def greet(name, greeting="Hello"):
    """Return a greeting string."""
    return f"{greeting}, {name}!"

# *args and **kwargs
def func(*args, **kwargs):
    for a in args: print(a)
    for k, v in kwargs.items():
        print(f"{k}={v}")

# Lambda (anonymous function)
double = lambda x: x * 2
sorted(users, key=lambda u: u.age)`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Positional-only params (3.8+): <code>def f(a, b, /, c)</code></Bullet>
              <Bullet>Keyword-only params: <code>def f(a, *, key=True)</code></Bullet>
              <Bullet>Type hints: <code>def add(x: int, y: int) -&gt; int:</code></Bullet>
              <Bullet>Functions are first-class objects — pass them as arguments</Bullet>
              <Bullet><strong>Closures:</strong> inner functions capture outer scope variables</Bullet>
            </div>
          </SectionCard>

          {/* Section 9 — Error Handling */}
          <SectionCard number="9" title="Error Handling">
            <Code>{`try:
    result = 10 / x
except ZeroDivisionError:
    print("Cannot divide by zero")
except (TypeError, ValueError) as e:
    print(f"Error: {e}")
else:
    print("Success!")    # no exception
finally:
    cleanup()            # always runs

# Raise exceptions
raise ValueError("Invalid input")

# Custom exceptions
class AppError(Exception):
    def __init__(self, msg, code=500):
        super().__init__(msg)
        self.code = code`}</Code>
            <Bullet><strong>Common exceptions:</strong> KeyError, IndexError, AttributeError, FileNotFoundError, ImportError</Bullet>
            <Bullet>Use <code>except Exception</code> (not bare <code>except:</code>) to avoid catching SystemExit</Bullet>
          </SectionCard>

          {/* Section 10 — File I/O */}
          <SectionCard number="10" title="File I/O">
            <Code>{`# Context manager (auto-closes)
with open("data.txt", "r") as f:
    content = f.read()       # entire file
    lines = f.readlines()    # list of lines

with open("out.txt", "w") as f:
    f.write("Hello\\n")
    f.writelines(lines)

# pathlib (modern path handling)
from pathlib import Path
p = Path("data") / "file.txt"
text = p.read_text()
p.write_text("new content")
p.exists()  p.is_file()  p.mkdir()`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="'r'" v="Read (default)" />
              <KV k="'w'" v="Write (truncates)" />
              <KV k="'a'" v="Append" />
              <KV k="'rb'/'wb'" v="Binary mode" />
              <KV k="'x'" v="Exclusive create (fails if exists)" />
            </div>
          </SectionCard>

          {/* Section 11 — Modules & Imports */}
          <SectionCard number="11" title="Modules & Imports">
            <Code>{`import os
import os.path as osp
from os import getcwd, listdir
from os.path import join as pjoin
from datetime import datetime as dt

# Conditional import
try:
    import ujson as json
except ImportError:
    import json`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><code>__name__ == "__main__"</code> — True when file is run directly</Bullet>
              <Bullet><code>__init__.py</code> makes a directory a package</Bullet>
              <Bullet>Relative imports: <code>from . import sibling</code>, <code>from .. import parent</code></Bullet>
              <Bullet><code>dir(module)</code> lists all attributes; <code>help(func)</code> shows docs</Bullet>
              <Bullet>Use <code>importlib.reload(mod)</code> to reload during development</Bullet>
            </div>
          </SectionCard>

          {/* Section 12 — Virtual Environments & pip */}
          <SectionCard number="12" title="Virtual Environments & pip">
            <Code>{`# Create and activate venv
python -m venv .venv
source .venv/bin/activate   # Linux/Mac
.venv\\Scripts\\activate      # Windows

# pip commands
pip install requests
pip install -r requirements.txt
pip freeze > requirements.txt
pip list --outdated
pip install --upgrade pkg`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>pyproject.toml</strong> — modern project config (replaces setup.py)</Bullet>
              <Bullet><strong>uv</strong> — blazing fast pip/venv alternative written in Rust</Bullet>
              <Bullet><code>python -m pip</code> ensures correct Python version's pip</Bullet>
              <Bullet>Always use venvs — never install packages globally</Bullet>
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Intermediate & Advanced */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 13 — Classes & OOP */}
          <SectionCard number="13" title="Classes & OOP">
            <Code>{`class Animal:
    species_count = 0   # class variable

    def __init__(self, name, sound):
        self.name = name     # instance var
        self._sound = sound  # "private"
        Animal.species_count += 1

    def speak(self):
        return f"{self.name}: {self._sound}"

    @property
    def sound(self):
        return self._sound

    def __repr__(self):
        return f"Animal({self.name!r})"

class Dog(Animal):       # inheritance
    def __init__(self, name):
        super().__init__(name, "Woof")

    def speak(self):     # override
        return f"{self.name} barks!"`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>Dunder methods:</strong> <code>__str__</code>, <code>__repr__</code>, <code>__len__</code>, <code>__eq__</code>, <code>__hash__</code>, <code>__iter__</code></Bullet>
              <Bullet><code>@dataclass</code> auto-generates __init__, __repr__, __eq__</Bullet>
            </div>
          </SectionCard>

          {/* Section 14 — Decorators */}
          <SectionCard number="14" title="Decorators">
            <Code>{`import functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__}: {elapsed:.3f}s")
        return result
    return wrapper

@timer
def slow_func():
    time.sleep(1)`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="@property" desc="Getter method accessed as attribute" />
              <RefRow cmd="@staticmethod" desc="No self/cls — plain function in class" />
              <RefRow cmd="@classmethod" desc="Receives cls instead of self" />
              <RefRow cmd="@abstractmethod" desc="Must be overridden in subclass" />
              <RefRow cmd="@functools.cache" desc="Memoize function results (3.9+)" />
            </div>
            <Bullet>Use <code>@functools.wraps(func)</code> to preserve original function metadata</Bullet>
          </SectionCard>

          {/* Section 15 — Generators & Iterators */}
          <SectionCard number="15" title="Generators & Iterators">
            <Code>{`def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]

# Generator expression
lines = (line.strip() for line in file)

# Send values into generator
def accumulator():
    total = 0
    while True:
        val = yield total
        total += val`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><code>yield</code> pauses function, <code>next()</code> resumes it</Bullet>
              <Bullet><code>yield from iterable</code> — delegate to sub-generator</Bullet>
              <Bullet>Generators are lazy — compute values on demand, saving memory</Bullet>
              <Bullet>Implement <code>__iter__</code> and <code>__next__</code> for custom iterators</Bullet>
            </div>
          </SectionCard>

          {/* Section 16 — Type Hints */}
          <SectionCard number="16" title="Type Hints">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">3.9+</Tag><Tag color="#7a5a8a">Gradual Typing</Tag>
            </div>
            <Code>{`from typing import Optional, Union

def process(
    items: list[str],
    count: int = 10,
    callback: Callable[[str], bool] | None = None,
) -> dict[str, int]:
    ...

# Type aliases
UserID = int
Matrix = list[list[float]]

# TypedDict for structured dicts
class Config(TypedDict):
    host: str
    port: int
    debug: bool`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><code>X | Y</code> union syntax replaces <code>Union[X, Y]</code> in 3.10+</Bullet>
              <Bullet><code>Optional[X]</code> is shorthand for <code>X | None</code></Bullet>
              <Bullet>Use <code>mypy</code> or <code>pyright</code> for static type checking</Bullet>
              <Bullet>Type hints are <strong>not enforced</strong> at runtime — they are documentation</Bullet>
            </div>
          </SectionCard>

          {/* Section 17 — Standard Library Gems */}
          <SectionCard number="17" title="Standard Library Gems">
            <Code>{`from collections import (
    defaultdict, Counter, deque, namedtuple
)
from itertools import (
    chain, islice, groupby, product, combinations
)
from functools import (
    partial, reduce, lru_cache
)
import json, csv, re, os, sys
from datetime import datetime, timedelta
from pathlib import Path`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="collections" v="Specialized containers beyond dict/list/set" />
              <KV k="itertools" v="Fast, memory-efficient iteration tools" />
              <KV k="functools" v="Higher-order functions, caching, partial" />
              <KV k="json" v="JSON encode/decode: dumps(), loads()" />
              <KV k="datetime" v="Date/time arithmetic, formatting, parsing" />
              <KV k="os / sys" v="OS interface, path ops, sys args, exit" />
              <KV k="re" v="Regular expressions: search, match, findall" />
              <KV k="csv" v="CSV reader/writer with dialect support" />
            </div>
          </SectionCard>

          {/* Section 18 — Common Data Patterns */}
          <SectionCard number="18" title="Common Data Patterns">
            <Code>{`from collections import Counter, defaultdict

# Counting
words = "the cat sat on the mat".split()
freq = Counter(words)
freq.most_common(3)
# [('the', 2), ('cat', 1), ('sat', 1)]

# Grouping
groups = defaultdict(list)
for item in data:
    groups[item.category].append(item)

# Sorting with key
users.sort(key=lambda u: u.age)
sorted(data, key=itemgetter("name"))

# Flatten nested lists
flat = [x for sub in nested for x in sub]`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><code>namedtuple("Point", ["x", "y"])</code> — lightweight immutable class</Bullet>
              <Bullet><code>deque</code> — O(1) append/pop on both ends</Bullet>
              <Bullet><code>ChainMap</code> — combine multiple dicts logically</Bullet>
            </div>
          </SectionCard>

          {/* Section 19 — String & Regex */}
          <SectionCard number="19" title="Regular Expressions">
            <Code>{`import re

# Common patterns
re.search(r"\\d+", text)     # first match
re.findall(r"\\w+", text)    # all matches
re.sub(r"old", "new", text)  # replace
re.split(r"[,;]", text)     # split

# Groups
m = re.match(r"(\\w+)@(\\w+)", email)
m.group(1)  # username
m.group(2)  # domain

# Compiled pattern (faster for reuse)
pat = re.compile(r"^\\d{3}-\\d{4}$")
pat.match("555-1234")`}</Code>
            <div style={{ marginTop: 8 }}>
              <RefRow cmd="\\d  \\D" desc="Digit / non-digit" />
              <RefRow cmd="\\w  \\W" desc="Word char / non-word" />
              <RefRow cmd="\\s  \\S" desc="Whitespace / non-whitespace" />
              <RefRow cmd=".  *  +  ?" desc="Any, 0+, 1+, 0-or-1" />
              <RefRow cmd="^  $" desc="Start / end of string" />
            </div>
          </SectionCard>

          {/* Section 20 — Testing */}
          <SectionCard number="20" title="Testing">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">pytest</Tag><Tag color="#3a6ea5">unittest</Tag>
            </div>
            <Code>{`# pytest (recommended)
def test_add():
    assert add(2, 3) == 5

def test_raises():
    with pytest.raises(ValueError):
        parse("invalid")

# Fixtures
@pytest.fixture
def db():
    conn = create_conn()
    yield conn
    conn.close()

def test_query(db):
    result = db.query("SELECT 1")
    assert result == [(1,)]`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Run: <code>pytest -v</code> (verbose), <code>pytest -x</code> (stop on first fail)</Bullet>
              <Bullet><code>pytest --cov=src</code> — measure code coverage</Bullet>
              <Bullet><code>unittest.mock.patch</code> — mock dependencies in tests</Bullet>
              <Bullet><code>@pytest.mark.parametrize</code> — run test with multiple inputs</Bullet>
            </div>
          </SectionCard>

          {/* Section 21 — Common Built-in Functions */}
          <SectionCard number="21" title="Essential Built-in Functions">
            <RefRow cmd="len(x)" desc="Length of string, list, dict, etc." />
            <RefRow cmd="range(a,b,s)" desc="Integer sequence from a to b by step s" />
            <RefRow cmd="enumerate(it)" desc="Pairs of (index, value)" />
            <RefRow cmd="zip(a, b)" desc="Pair elements from multiple iterables" />
            <RefRow cmd="map(fn, it)" desc="Apply function to each element" />
            <RefRow cmd="filter(fn, it)" desc="Keep elements where fn returns True" />
            <RefRow cmd="sorted(it)" desc="Return new sorted list" />
            <RefRow cmd="reversed(it)" desc="Reverse iterator" />
            <RefRow cmd="any(it)" desc="True if any element is truthy" />
            <RefRow cmd="all(it)" desc="True if all elements are truthy" />
            <RefRow cmd="isinstance(x,t)" desc="Check if x is instance of type t" />
            <RefRow cmd="hasattr(o,n)" desc="Check if object has attribute" />
            <RefRow cmd="getattr(o,n,d)" desc="Get attribute with default fallback" />
          </SectionCard>

          {/* Section 22 — Useful Idioms & Tricks */}
          <SectionCard number="22" title="Useful Idioms & Tricks">
            <Code>{`# Walrus operator (3.8+)
if (n := len(data)) > 10:
    print(f"Too long: {n}")

# Chained comparison
if 0 < x < 100:

# Multiple assignment
a, b = b, a        # swap values
x = y = z = 0      # assign same value

# Dictionary unpacking
defaults = {"color": "red", "size": 10}
config = {**defaults, "size": 20}

# Conditional expression
status = "ok" if code == 200 else "fail"

# Star unpacking in calls
args = [1, 2, 3]
func(*args, **kwargs)`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><code>_</code> for throwaway variables: <code>for _ in range(5):</code></Bullet>
              <Bullet><strong>Truthiness:</strong> <code>0</code>, <code>""</code>, <code>[]</code>, <code>None</code> are falsy</Bullet>
              <Bullet><code>or</code> for defaults: <code>name = user_input or "Anonymous"</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 23 — Concurrency Basics */}
          <SectionCard number="23" title="Concurrency Basics">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">GIL</Tag><Tag color="#2a7a7a">async</Tag><Tag color="#7a5a8a">threads</Tag>
            </div>
            <Code>{`# Threading (I/O-bound)
from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=4) as ex:
    results = ex.map(fetch_url, urls)

# Multiprocessing (CPU-bound)
from multiprocessing import Pool
with Pool(4) as p:
    results = p.map(compute, data)

# Asyncio (I/O-bound, cooperative)
import asyncio
async def fetch(url):
    async with aiohttp.ClientSession() as s:
        async with s.get(url) as r:
            return await r.text()
await asyncio.gather(*tasks)`}</Code>
            <Bullet><strong>GIL:</strong> only one thread runs Python bytecode at a time</Bullet>
            <Bullet>Use <strong>threading</strong> for I/O-bound, <strong>multiprocessing</strong> for CPU-bound</Bullet>
            <Bullet><code>asyncio</code> — single-threaded concurrency via event loop</Bullet>
          </SectionCard>

          {/* Section 24 — When to Use What */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "List", when: "Ordered, mutable collection", best: "Sequential data, stacks (append/pop), iteration order matters", icon: "[ ]" },
                { title: "Tuple", when: "Ordered, immutable collection", best: "Dict keys, function returns, data you won't change, named records", icon: "( )" },
                { title: "Dict", when: "Key-value lookups", best: "Fast O(1) access by key, JSON-like data, configs, caching", icon: "{ }" },
                { title: "Set", when: "Unique elements, math ops", best: "Deduplication, membership testing, union/intersection/difference", icon: "{ }" },
                { title: "dataclass", when: "Structured data objects", best: "Replace simple classes, auto __init__/__repr__, type-hinted fields", icon: "@" },
                { title: "Generator", when: "Lazy sequences", best: "Large datasets, pipelines, memory-efficient iteration, infinite streams", icon: "fn*" },
                { title: "namedtuple", when: "Lightweight immutable records", best: "CSV rows, DB records, API responses where you want .field access", icon: "nt" },
                { title: "deque", when: "Fast append/pop both ends", best: "Queues, BFS, sliding windows, recent-N buffers", icon: "<>" },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: palette.accent }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        Python Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Python 3.10+ · Covers core language, standard library, and common patterns
        </span>
      </div>
    </div>
  );
}
