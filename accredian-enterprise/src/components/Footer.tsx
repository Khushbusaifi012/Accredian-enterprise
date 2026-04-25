import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Footer({ onEnquire }: { onEnquire: () => void }) {
  return (
    <footer className="bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-4xl font-semibold tracking-tight text-blue-600">
              accredian
            </div>
            <div className="text-sm text-slate-500">credentials that matter</div>
            <div className="mt-5 flex items-center gap-3 text-slate-700">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/accredianlearn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M14 8h2V5h-2.2C11.7 5 10 6.7 10 8.8V11H8v3h2v5h3v-5h2.3l.7-3H13v-1.9c0-.6.4-1.1 1-1.1Z" />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/accredianedu/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M6.4 8.7a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM4.8 10h3.1v9.2H4.8V10Zm5.1 0H13v1.3h.1c.5-.9 1.8-1.6 3.2-1.6 3.3 0 3.9 2.1 3.9 4.9v4.6h-3.1v-4.1c0-1 0-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2v4.2H9.9V10Z" />
                </svg>
              </a>
              <a
                aria-label="X"
                href="https://x.com/accredianedu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M18.2 4H21l-6.1 7 7.2 9h-5.6l-4.4-5.5L7.3 20H4.5l6.5-7.4L4 4h5.7l4 5.1L18.2 4Z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 17.3c0 2-1.6 3.7-3.7 3.7H6.7C4.6 21 3 19.4 3 17.3V6.7C3 4.6 4.6 3 6.7 3h10.6C19.4 3 21 4.6 21 6.7v10.6ZM19.4 6.7c0-1.2-1-2.1-2.1-2.1H6.7c-1.2 0-2.1 1-2.1 2.1v10.6c0 1.2 1 2.1 2.1 2.1h10.6c1.2 0 2.1-1 2.1-2.1V6.7Z" />
                </svg>
              </a>
              <a
                aria-label="YouTube"
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M21 8.6a2.8 2.8 0 0 0-2-2c-1.8-.5-7-.5-7-.5s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 3 12a29.2 29.2 0 0 0 .4 3.4 2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2c.3-1.1.4-2.3.4-3.4a29.2 29.2 0 0 0-.4-3.4ZM10 15V9l5 3-5 3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="sm:text-right">
            <Button variant="primary" onClick={onEnquire} className="h-11 rounded-lg px-7">
              Enquire Now
            </Button>
            <div className="mt-2 text-sm text-slate-600">Speak with our Advisor</div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-300 pt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-xl font-bold text-slate-900">Accredian</div>
              <div className="mt-3 flex flex-col gap-2 text-lg text-slate-700">
                <a
                  className="hover:text-blue-600"
                  href="https://accredian.com/About"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
                <a
                  className="hover:text-blue-600"
                  href="https://blog.accredian.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
                <a
                  className="hover:text-blue-600"
                  href="https://accredian.com/whyaccredian"
                  target="_blank"
                  rel="noreferrer"
                >
                  Why Accredian
                </a>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold text-slate-900">Contact Us</div>
              <div className="mt-3 text-base text-slate-700">
                <div>
                  Email us:{" "}
                  <a className="text-blue-600 hover:underline" href="mailto:enterprise@accredian.com">
                    enterprise@accredian.com
                  </a>
                </div>
                <div className="mt-2 max-w-md">
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                  Gurugram, Haryana
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-300 pt-4 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

