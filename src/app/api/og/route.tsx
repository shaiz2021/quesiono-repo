import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Quesiono - Web Design & Digital Agency';

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#212842',
            color: '#F0E7D5',
            padding: '40px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              border: '3px solid #F0E7D5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              fontSize: '64px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            Q
          </div>
          <h1
            style={{
              fontSize: '48px',
              fontStyle: 'italic',
              textAlign: 'center',
              margin: 0,
              maxWidth: '1000px',
            }}
          >
            {title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(`${e}`);
    return new Response('Failed to generate image', { status: 500 });
  }
}
